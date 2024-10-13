import { forwardRef, type ForwardedRef } from 'react';

import { Compass, MapPin, Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  handleSubmit: (event: React.FormEvent) => void;
}

const MapAssistantForm = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form ref={ref} className='grid w-full items-start gap-6'>
        <fieldset className='grid gap-6 rounded-lg border p-4'>
          <legend className='-ml-1 px-1 text-sm font-medium'>
            Assistant Settings
          </legend>
          <div className='grid gap-3'>
            <Label htmlFor='assistant-type'>AI Assistant Type</Label>
            <Select name='assistant-type'>
              <SelectTrigger id='assistant-type' className='items-start'>
                <SelectValue placeholder='Select an assistant type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='local-guide'>
                  <div className='flex items-start gap-3 text-muted-foreground'>
                    <MapPin className='size-5' />
                    <div className='grid gap-0.5'>
                      <p>Local Guide</p>
                      <p className='text-xs'>
                        Expert on local attractions and history
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value='travel-planner'>
                  <div className='flex items-start gap-3 text-muted-foreground'>
                    <Compass className='size-5' />
                    <div className='grid gap-0.5'>
                      <p>Travel Planner</p>
                      <p className='text-xs'>
                        Helps plan itineraries and trips
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value='data-analyst'>
                  <div className='flex items-start gap-3 text-muted-foreground'>
                    <Search className='size-5' />
                    <div className='grid gap-0.5'>
                      <p>Data Analyst</p>
                      <p className='text-xs'>
                        Provides insights on geographical data
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='conversation-style'>Conversation Style</Label>
            <Select name='conversation-style'>
              <SelectTrigger id='conversation-style'>
                <SelectValue placeholder='Select a style' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='formal'>Formal</SelectItem>
                <SelectItem value='casual'>Casual</SelectItem>
                <SelectItem value='friendly'>Friendly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='search-radius'>Search Radius (km)</Label>
              <Input
                id='search-radius'
                name='search-radius'
                type='number'
                placeholder='5'
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='poi-limit'>Points of Interest Limit</Label>
              <Input
                id='poi-limit'
                name='poi-limit'
                type='number'
                placeholder='10'
              />
            </div>
          </div>
        </fieldset>
        <fieldset className='grid gap-6 rounded-lg border p-4'>
          <legend className='-ml-1 px-1 text-sm font-medium'>Your Query</legend>
          <div className='grid gap-3'>
            <Label htmlFor='query-type'>Query Type</Label>
            <Select defaultValue='general' name='query-type'>
              <SelectTrigger>
                <SelectValue placeholder='Select a query type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='general'>General Question</SelectItem>
                <SelectItem value='directions'>Get Directions</SelectItem>
                <SelectItem value='recommendations'>Recommendations</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='question'>Your Question</Label>
            <Textarea
              id='question'
              name='question'
              placeholder='Ask about locations, attractions, or data on the map...'
              className='min-h-[9.5rem]'
            />
          </div>
        </fieldset>
      </form>
    );
  }
);

export default MapAssistantForm;
