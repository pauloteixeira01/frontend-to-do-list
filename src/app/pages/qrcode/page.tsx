'use client'

import React, { useState } from 'react';
import Qr from 'qrcode.react';
import Link from 'next/link'

import Footer from '@/app/components/Footer';

import * as S from './styles';

export default function Qrcode() {
    const [mac, setMac] = useState('');
	const [redirect, setRedirect] = useState(false);

	async function SaveMac() {
		if (!mac) {
			alert('Informe o código do smartphone');
		} else {
			await localStorage.setItem('@yourMac/macaddress', mac);
			setRedirect(true);
			window.location.reload();
		}		
	}

	return(
		<S.Container>
			{ redirect && <Link href="/"/> }

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

			<Footer />
		</S.Container>	
	)
}