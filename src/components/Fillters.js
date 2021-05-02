import React, {useState} from 'react'

export default function Fillters(props) {
    
    let [fillters, setFillters] = useState([
        {
            name: 'Вчера',
            id: 0,
            isActive: false
        },
        {
            name: 'Сегодня',
            id: 1,
            isActive: false
        },
        {
            name: 'Выполненные',
            id: 2,
            isActive: false
        },
        {
            name: 'Не выполненные',
            id: 3,
            isActive: false
        }
    ])

    function Filtering(id) {
        let fl
        let prev
        fillters.forEach(fillter => {
            if (fillter.id === id && fillter.isActive){
                props.clearFiller()
                prev = id
                fillter.isActive = false
            }
            fillter.isActive = false

        })
        setFillters(
            fillters.map(fillter => {
                if (fillter.id === id && id !== prev){
                    fillter.isActive = !fillter.isActive
                    fl = fillter
                    props.handleFillter(fl)
                }
                return fillter 
            })
        )
    }

    function ClearFillters() {
        let fl = []
        fillters.forEach(fillter => {
            fillter.isActive = false
            fl.push(fillter)
        })
        setFillters(fl)
        props.clearFiller()
    }

    return (
        <div className='fillter'>
            <div className='fillter__clear' onClick={() => ClearFillters()}>
                Очистить
            </div>
            {fillters.map(fillter => (
                <div className='fillter__item' 
                key={fillter.id}
                style={fillter.isActive ? {background:'#FF6464', color:'#ffff'} : {background: 'var(--bg)'}}
                onClick={() => Filtering(fillter.id)}
                >
                    {fillter.name}
                    </div>
            ))}
        </div>
    )
}
