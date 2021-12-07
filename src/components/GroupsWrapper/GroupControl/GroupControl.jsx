import React, {useState} from 'react';
import style from "./groupcontrol.module.scss"


const GroupControl = (props) => {

    const {label, values, selected} = props
    const [dropDown, setDropDown] = useState(false);
    const [newGroupVal, setNewGroupVal] = useState('');

    const addGroup = () => {
        props.addGroup(newGroupVal)
        setNewGroupVal('')
    }

    const selectGroup = (e) => {
        props.selectGroup(e)
    }

    const deleteGroup = (e) => {
        props.deleteGroup(e)
    }

    return (
        <div className={style.wrapper}
             // onBlur={() => setDropDown(false)}
        >
            <div className={style.label}
                 onClick={() => setDropDown(false)}>Группа:</div>

            <div className={`${style.inputControl} ${(dropDown) ? style.active : ''}`}
                 onClick={() => setDropDown(true)}
            >
                <input
                    type="text"
                    placeholder="Укажите название"
                    value={(selected) ? label : newGroupVal}
                    onChange={(!selected) ? (e) => setNewGroupVal(e.target.value) : null}
                />
                <div className={style.buttonsBox}>
                    {selected ?
                        <div className={style.deleteBtn}
                             onClick={() => deleteGroup(selected)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"
                                 className={style.deleteIcon}>
                                <path
                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
                            </svg>
                        </div> : newGroupVal ?
                            <div className={style.addBtn}
                                 onClick={addGroup}
                            >
                            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"
                                 className={style.applyArrow}>
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                        </div> : null}
                    {values ?
                        <div className={style.dropDownBtnBox}>
                            {(newGroupVal || selected) ? <span className={style.separator}/> : null}
                            <div className={`${style.arrowDownBtn} ${(dropDown && values) ? style.rotate : ''}`}>
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
                                     className={style.arrowDown}>
                                    <path
                                        d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
                                </svg>
                            </div>
                        </div> : null}
                </div>
            </div>
            {(values.length && dropDown) ? <div className={style.selector}>
                {values.map(item => <div className={style.option} key={item.id} onClick={() => selectGroup(item)}>{item.label}</div>)}
            </div> : null}
        </div>
    );
};

export default GroupControl;