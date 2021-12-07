import React, {useState} from "react";
import style from './groupswrapper.module.scss'
import {nanoid} from "nanoid";
import GroupControl from "./GroupControl/GroupControl";


const GroupsWrapper = () => {
    const initialGroups = [
        {
            id: 1,
            label: 'Test 1',
        },
        {
            id: 2,
            label: 'Test 2',
        },
        {
            id: 3,
            label: 'Test 3',
        },
        {
            id: 4,
            label: 'Test 4',
        },
        {
            id: 5,
            label: 'Test 5',
        },
        {
            id: 6,
            label: 'Test 6',
        },
        {
            id: 7,
            label: 'Test 7',
        },
        {
            id: 8,
            label: 'Test 8',
        },
        {
            id: 9,
            label: 'Test 9',
        },
        {
            id: 10,
            label: 'Test 10',
        },
        {
            id: 11,
            label: 'Test 11',
        },
        {
            id: 12,
            label: 'Test 12',
        },
        {
            id: 13,
            label: 'Test 13',
        },
        {
            id: 14,
            label: 'Test 14',
        },
        {
            id: 15,
            label: 'Test 15',
        },
        {
            id: 16,
            label: 'Test 16',
        },
        {
            id: 17,
            label: 'Test 17',
        },
        {
            id: 18,
            label: 'Test 18',
        },
        {
            id: 19,
            label: 'Test 19',
        },
        {
            id: 20,
            label: 'Test 20',
        },
    ]

    const [store, setStore] = useState({
        selected: {
            id: '',
            label: ''
        },
        groups: initialGroups
    })

    const addGroup = (payload) => {
        const groups = store.groups
        groups.push({
            id: nanoid(),
            label: payload
        })
        setStore({...store, groups})
    }

    const deleteGroup = (payload) => {
        const selected = {
            id: '',
            label: ''
        }
        const groups = store.groups.filter(item => item.id !== payload)
        setStore({...store, selected, groups})
    }

    const selectGroup = (payload) => {
        const selected = {
            id: payload.id,
            label: payload.label
        }
        setStore({...store, selected})
    }

    // console.log(store)

    return (
        <div className={style.wrapper}>
            <GroupControl label={store.selected.label} values={store.groups} selected={store.selected.id}
                          addGroup={addGroup}
                          selectGroup={selectGroup}
                          deleteGroup={deleteGroup}
            />
        </div>
    );
}

export default GroupsWrapper;
