import { forwardRef, type ForwardedRef } from 'react';

import {
  Compass,
  CornerDownLeft,
  MapPin,
  Mic,
  Paperclip,
  Search
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface Props {
  handleSubmit: (event: React.FormEvent) => void;
}

const ChatForm = forwardRef(
  ({ handleSubmit }: Props, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className='flex flex-col h-full w-full'
      >
        <fieldset className='flex-shrink-0 rounded-lg border p-4 mb-4'>
          <legend className='-ml-1 px-1 text-sm font-medium'>
            Assistant Settings
          </legend>
          <div className='grid gap-3 mb-4'>
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
          <div className='grid gap-3 mb-4'>
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
        </fieldset>
        <fieldset className='flex flex-col flex-grow rounded-lg border p-4'>
          <legend className='-ml-1 px-1 text-sm font-medium'>Your Query</legend>

          <Label htmlFor='message' className='sr-only'>
            Message
          </Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Type your message here...'
            className='min-h-12 h-full resize-none border-0 p-3 shadow-none focus-visible:ring-0'
          />
          <div className='flex items-center p-3 pt-0'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Paperclip className='size-4' />
                    <span className='sr-only'>Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side='top'>Attach File</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Mic className='size-4' />
                    <span className='sr-only'>Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side='top'>Use Microphone</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button type='submit' size='sm' className='ml-auto gap-1.5'>
              Send Message
              <CornerDownLeft className='size-3.5' />
            </Button>
          </div>
        </fieldset>
      </form>
    );
  }
);

export default ChatForm;
