import  { useState } from 'react';
import MoodInput from '../components/MoodInput';
import MoodOutput from '../components/Moodoutput';

const Home = () => {

    const [mood, setMood] = useState('');
    const[subject,setSubject] = useState('');
    const[footer,setFooter] = useState('');
    const[generator,setGenerator] = useState(false);

    const handlegenerate =  () => {
        const lowermood = mood.toLowerCase();
        if(lowermood.includes('happy')){
            setSubject('Feeling Great today');
            setFooter('Stay Awesome');
        }else if(lowermood.includes('sad')){
            setSubject('Just another tough day');
            setFooter('Sending hugs');
        }else if(lowermood.includes('angry')){
            setSubject('Need to vent');
            setFooter('Take it easy');
        } else{
            setSubject('Mood set');
            setFooter('Catch you later');
        }
        setGenerator(true);

    }
    const handleReset = () => {
        setMood('');
        setSubject('');
        setFooter('');
        setGenerator(false);
    }
    return (
        <div className = 'max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6' >
            <h2 className= 'text-2xl text-grey-800 font-bold '  >MoodMail Generator </h2>
            {!generator ? (<MoodInput 
            mood = {mood}
            setMood = {setMood}
            onGenerate = {handlegenerate}
            disabled = {generator}
            />) : ( <MoodOutput subject={subject} footer= {footer} onReset={handleReset}/>
        ) }

         </div>  
    )};
export default Home;