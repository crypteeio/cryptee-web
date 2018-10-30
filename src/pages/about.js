import React from 'react'
import { Header, Segment, Input, Divider, List, ListItem } from 'semantic-ui-react';
import { dependencies } from '../../package.json'

export default () => {
    const inputCopyAction = (inputId) => ({
        color: 'blue',
        labelPosition: 'right',
        icon: 'copy',
        content: 'Copy',
        onClick: (e) => {
            document.getElementById(inputId).select();
            document.execCommand("copy");
        }
    })
    return <Segment raised>
        <Header as='h1'>About</Header>
        Cryptee is being developed by crypto enthusiasts.
        <Header as='h2'>Contacts</Header>
        <a href='https://lukasrada.cz' target='_blank' rel="noopener noreferrer">https://lukasrada.cz</a>
        <br />
        <a href='https://twitter.com/muflonobycajny' target='_blank' rel="noopener noreferrer">https://twitter.com/muflonobycajny</a>
        <Header as='h2'>Donate</Header>
        <p>Did you find Crytpee helpful? Your appreciation is always welcome :)</p>
        <Divider hidden />
        <Input id="btc-address" readOnly label='BTC' value='3JyDBH1oJZ3TUeXXTDdcv1YdLWNJJwT8a1' action={inputCopyAction("btc-address")} fluid />
        <Divider hidden />
        <Input id="ltc-address" readOnly label='LTC' value='MJmhtm29f9Cb7hxbMHWnFNa3fEuEQYBDNR' action={inputCopyAction("ltc-address")} fluid />
        <Header as='h2'>Core dependencies</Header>
        cryptee-core: {JSON.stringify(dependencies["cryptee-core"])}
    </Segment>
}