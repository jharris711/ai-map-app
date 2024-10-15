from django.db import models


class Settings(models.Model):
    assistant_type = models.CharField(max_length=100, blank=True, default='')
    conversation_style = models.CharField(max_length=100, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.OneToOneField(
        'auth.User',
        related_name='settings',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ['created_at']
        verbose_name_plural = "Settings"

    def __str__(self):
        return f"{self.user.username}'s Settings"


class Message(models.Model):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('assistant', 'Assistant'),
        ('system', 'System'),
    ]

    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')
    settings = models.ForeignKey(Settings, related_name='messages', on_delete=models.CASCADE)
    user = models.ForeignKey(
        'auth.User',
        related_name='messages',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"{self.user.username}'s Message: {self.content[:50]}..."

    @property
    def owner(self):
        return self.user
