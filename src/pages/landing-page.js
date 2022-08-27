import React from 'react';
import MainBody from '../components/main-body';
import Contents from '../components/contents';
import Header from '../components/header';

export default function Landing() {
    return (
        <>
            <Header show={false}/>
            <MainBody />
            <Contents />
        </>
    )
}