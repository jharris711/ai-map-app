import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import AppLayout from '@/layouts/app-layout';

import ChatForm from './chat-form';

export default function MapAssistantPage() {
  const chatFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!chatFormRef.current) return;

    const chatFormData = new FormData(chatFormRef.current);

    const data = {
      assistantType: chatFormData.get('assistant-type'),
      conversationStyle: chatFormData.get('conversation-style'),
      message: chatFormData.get('message')
    };

    console.log(data);
  };

  return (
    <AppLayout heading='Map AI Assistant'>
      <main className='grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='relative hidden flex-col items-start gap-2 md:flex'>
          <ChatForm handleSubmit={handleSubmit} ref={chatFormRef} />
        </div>
        <div className='relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2'>
          <div className='flex-1'>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              className='h-full w-full rounded-xl shadow-lg'
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
