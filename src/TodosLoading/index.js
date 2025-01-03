import './TodosLoading.css'
import { waveform } from 'ldrs'

function TodosLoading() {
    waveform.register()
    return (
        <div className='ContainerLoading'>
             <l-waveform size="87" stroke="3.5" speed="1" color="white"></l-waveform>
        </div>
       
    );
}

export { TodosLoading };    