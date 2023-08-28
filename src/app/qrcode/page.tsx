'use client'

import React, { useState } from 'react';
import Qr from 'qrcode.react';
import { redirect } from 'next/navigation'

import isConnected from '@/utils/isConnected';

import * as S from './styles';

export default function Qrcode() {
    const [mac, setMac] = useState('');
	const [redirection, setRedirection] = useState(false);
	
	function SaveMac() {
		if (!mac) {
			alert('Please, write the code from smartphone.');
		} else {
			localStorage.setItem('@yourMac/macaddress', mac);
			setRedirection(true);
			window.location.reload();
		}	
	}

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