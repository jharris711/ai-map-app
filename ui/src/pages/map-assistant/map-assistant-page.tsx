import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import AppLayout from '@/layouts/app-layout';

import MapAssistantForm from './map-assistant-form';
import MapChatForm from './map-chat-form';

export default function MapAssistantPage() {
  const assistantFormRef = useRef<HTMLFormElement>(null);
  const chatFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!assistantFormRef.current || !chatFormRef.current) return;

    console.log('submitting form');

    const assistantFormData = new FormData(assistantFormRef.current);
    const chatFormData = new FormData(chatFormRef.current);

    const data = {
      assistantType: assistantFormData.get('assistant-type'),
      conversationStyle: assistantFormData.get('conversation-style'),
      searchRadius: assistantFormData.get('search-radius'),
      poiLimit: assistantFormData.get('poi-limit'),
      queryType: assistantFormData.get('query-type'),
      question: assistantFormData.get('question'),
      message: chatFormData.get('message')
    };

    console.log(data);
  };

  return (
    <AppLayout heading='Map AI Assistant'>
      <main className='grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='relative hidden flex-col items-start gap-8 md:flex'>
          <MapAssistantForm
            handleSubmit={handleSubmit}
            ref={assistantFormRef}
          />
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
          <MapChatForm handleSubmit={handleSubmit} ref={chatFormRef} />
        </div>
      </main>
    </AppLayout>
  );
}
