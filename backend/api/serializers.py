from rest_framework import serializers
from django.contrib.auth import get_user_model
from api.models import Settings, Message


User = get_user_model()


class MessageSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Message
        fields = ['id', 'owner', 'role', 'content', 'created_at', 'settings']
        read_only_fields = ['user']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class SettingsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Settings
        fields = ['id', 'owner', 'assistant_type', 'conversation_style', 'created_at', 'updated_at']
        read_only_fields = ['user']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class UserSerializer(serializers.ModelSerializer):
    settings = SettingsSerializer(read_only=True)
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'settings', 'messages']
