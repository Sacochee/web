"use client"

export function getLocal(){
    return localStorage.getItem("Id") | undefined
}