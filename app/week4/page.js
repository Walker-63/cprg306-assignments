//import stuff
"use client";
import React from 'react';
import NewItem from './new-item'; 
import Link from 'next/link';

function Page() {
    return (
      <div>
        <h1>Page Component</h1>
        <NewItem /> 
      </div>
    );
}

export default Page;