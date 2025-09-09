
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';

type Props = {
    mood: string;
    setMood: (val: string) => void;
    onGenerate: () => void;
    disabled: boolean;
}

const MoodInput = ({mood,setMood,onGenerate,disabled}:Props) => {
    return (
        <div className='space-y-4' >
        <Input
        placeholder="How are you feeling today? (e.g., happy, sad, angry)"
        value = {mood}
        onChange = {(e) =>setMood(e.target.value)}
        disabled = {disabled}
        />
        <Button 
        className='w-full' variant= 'default'
        onClick= {onGenerate}
        disabled = {disabled}
        >Generate E-mail Template</Button>
        </div>
    )
};
export default MoodInput;