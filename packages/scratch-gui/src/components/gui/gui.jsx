import React from 'react';

import PropTypes from 'prop-types';

import styles from './gui.css';

const GUI = ({title, children}) => (

    <main className={styles.gui}>

        <header className={styles.header}>

            <h1 className={styles.title}>{title}</h1>

        </header>

        <section className={styles.editor}>

            {children || (

                <div className={styles.workspace}>

                    <div className={styles.blocksPanel}>

                        <h2>Code</h2>

                        <p>Scratch blocks will appear here.</p>

                    </div>

                    <div className={styles.stagePanel}>

                        <div className
