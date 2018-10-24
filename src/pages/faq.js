import React, { Component } from 'react'
import { Icon, Header, Grid, Segment, Divider, List, ListItem } from 'semantic-ui-react'

export default class Faq extends Component {
  render() {
    return (<Segment raised>
    <Header as='h1'>FAQ</Header>
			<Header as='h2'>What is Cryptee?</Header>
			Cryptee is a web application providing data encryption and decryption using Trezor.
			<br />
			<br />
			Cryptee can be used to safely and securely encrypt both text and files. The encrypted data can be accessed only by using the private keys stored on the Trezor device.  
			<br />
			<br />
			Using Cryptee, you can sleep soundly, knowing that your business or private data is safe.
      		<Divider section />
			<Header as='h2'>What is Trezor?</Header>
			Trezor is a hardware wallet developed and manufactured by SatoshiLabs. Widely used to protect cryptocurrency funds, it has a number of additional applications. Its solid protection of private keys can be used to encrypt any type of sensitive data.
			<br />
			<br />
			When used in combination with Cryptee, even if a malicious party steals your data or your hard drive, they will never be able to access it without the Trezor device itself.
			<br />
			<br />
			All Trezor devices are PIN-protected and easily recoverable using the recovery seed. For more information, see the <a href="https://trezor.io/security/" target="_blank" rel="noopener noreferrer">Trezor security page</a>.
      		<Divider section />			  
			<Header as='h2'>What is Trezor?</Header>
			To put it simply - for data protection. Let us list only a few examples.
			<List bulleted>
				<ListItem>You might want to protect your company data from being stolen.</ListItem>
				<ListItem>You might want to store your private files on a cloud, but you are worried that the storage could get hacked.</ListItem>
				<ListItem>You really like to keep your data safe.</ListItem>
			</List>
			<Divider section />	
			<Header as='h2'>How do I use Cryptee?</Header>
			It is simple and straightforward. You plug in your Trezor device, upload the file you want to encrypt, set a key (it is important to remember it) and click on Encrypt.
			<br />
			<br />
			To decrypt the file back, just use your key and your Trezor device once again. Therefore, anyone trying to decrypt your files would need to have access both to your key and to your Trezor device.
			<Header as='h3' textAlign='left'>
				Encryption
			</Header>
				<Grid>
					<Grid.Row columns={5}>
						<Grid.Column textAlign='center' width={4}>
							<Icon name='file' size='big' />
							<Icon name='plus' />
							<Icon name='key' size='big' />
							<br />
							Original data + key
						</Grid.Column>
						<Grid.Column textAlign='center' width={2}>
							<Icon name='arrow right' size='big' />
						</Grid.Column>
						<Grid.Column textAlign='center' width={4} style={{ transform: "translateY(-8px) scale(0.8)" }}>
						<svg version="1.1" id="logotyp" x="0px" y="0px" viewBox="0 0 163.7 41.9">
						<polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1 
							"/>
						<path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5
							h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>
						<path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3
							c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>
						<polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>
						<path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7
							c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>
						<path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18
							h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>
						<polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>
						</svg>
						</Grid.Column>
						<Grid.Column textAlign='center' width={2}>
							<Icon name='arrow right' size='big' />
						</Grid.Column>
						<Grid.Column textAlign='center' width={4}>
							<Icon.Group size='big'>
								<Icon name='file' />
								<Icon corner name='lock' />
							</Icon.Group>
							<br />
							Encrypted data
						</Grid.Column>
					</Grid.Row>
				</Grid>				
			<Header as='h3' textAlign='left'>
				Decryption
			</Header>
				<Grid>
					<Grid.Row columns={5}>
						<Grid.Column textAlign='center' width={4} verticalAlign='bottom'>
							<Icon.Group size='big'>
								<Icon name='file' />
								<Icon corner name='lock' />
							</Icon.Group>
							<Icon name='plus' />
							<Icon name='key' size='big' />
							<br />
							Encrypted data + key
						</Grid.Column>
						<Grid.Column textAlign='center' width={2}>
							<Icon name='arrow right' size='big' />
						</Grid.Column>
						<Grid.Column textAlign='center' style={{ transform: "translateY(-8px) scale(0.8)" }} width={4}>
						<svg version="1.1" id="logotyp" x="0px" y="0px" viewBox="0 0 163.7 41.9">
						<polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1 
							"/>
						<path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5
							h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>
						<path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3
							c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>
						<polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>
						<path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7
							c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>
						<path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18
							h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>
						<polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>
						</svg>
						</Grid.Column>
						<Grid.Column textAlign='center' width={2}>
							<Icon name='arrow right' size='big' />							
						</Grid.Column>
						<Grid.Column textAlign='center' width={4}>
						<Icon name='file' size='big' />
						<br />
						Original data
						</Grid.Column>
					</Grid.Row>
				</Grid>				
				<Divider section />
				<Header as='h2'>Is Cryptee open-source?</Header>
				<p>Not yet, but during this year (2018) it will be open-source.</p>
				<Divider section />
				<Header as='h2'>How long does it take to encrypt the data?</Header>				
				<p>It depends on the data size. Approximate time to encrypt 1 MB data is about 1 minute and 20 secs.</p>
				<Divider section />
				<Header as='h2'>How much does it cost?</Header>				
				<p>Cryptee is developed by crypto enthusiasts and you can use it for free. However, we always welcome donations.:) See <a href="https://cryptee.io/about" target="_blank" rel="noopener noreferrer">this link</a></p>
			  	<Divider fitted hidden />
				</Segment>
    )
  }
}
