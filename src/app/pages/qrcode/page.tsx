'use client'

import React, { useState } from 'react';
import Qr from 'qrcode.react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Router from 'next/router'

import isConnected from '@/app/utils/isConnected';

import { redirect } from 'next/navigation'
import {Navigate} from 'react-router-dom'

import Footer from '@/app/components/Footer';

import * as S from './styles';

export default function Qrcode() {
    const [mac, setMac] = useState('');
	const [redirection, setRedirection] = useState(false);

	// const router = useRouter();
	
	function SaveMac() {
		console.log('Called function: ', mac)
		if (!mac) {
			alert('Please, write the code from smartphone.');
		} else {
			localStorage.setItem('@yourMac/macaddress', mac);
			setRedirection(true);
			window.location.reload();
		}	
	}

	console.log('CarmellaBing: ', redirection)
	return(
		<S.Container>
			{ isConnected && redirect('/') }

			<S.Content>
				<h1>Please, use a QRCODE reader app.</h1>
				<p>Your activities will be synchronized with your smartphone.</p>
				<S.QrCodeArea>
					<Qr value='getmacaddress' size={250}/>
				</S.QrCodeArea>

				<S.ValidationCode>
					<span>Please, enter the message that appeared on your smartphone.</span>
					<input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
					<button type="button" onClick={SaveMac}>SYNCHRONIZE</button>
				</S.ValidationCode>

			</S.Content>
		</S.Container>	
	)
}