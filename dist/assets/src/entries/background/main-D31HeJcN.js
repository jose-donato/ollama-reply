import{b as n}from"../../../browser-polyfill-CDoadmtY.js";const o="llama3:8b",r=`You are an AI assistant that generates engaging responses to social media posts. Based on the tweet you receive, you must generate a response that is engaging and relevant.

Guidelines:
- don't use more than 2 sentences
- be engaging and relevant
- use one or two emojis max
- be friendly and respectful
- don't use hashtags`;n.runtime.onInstalled.addListener(()=>{console.log("Extension installed")});n.runtime.onMessage.addListener((e,s,t)=>{if(e.action==="fetchResponse")return i(e.tweet).then(a=>{t({response:a})}),!0});async function i(e){return(await(await fetch("http://localhost:11434/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stream:!1,model:o,messages:[{role:"system",content:r},{role:"user",content:e}]})})).json()).message.content}
