"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import { FC, useEffect, useState } from 'react'
import { HomeView } from './views/HomeView'
import AppProvider from '@/context/AppContext';


export default function Home() {


  return (
    <AppProvider>
       <HomeView />
    </AppProvider>
  )
}
