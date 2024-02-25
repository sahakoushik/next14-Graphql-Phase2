import {Meta, StoryFn} from '@storybook/react'
import Sponsor,{SponsorProps} from './Sponsor'

export default {
    title:'Component/Sponsor',
    component:Sponsor,
} as Meta;

const Template: StoryFn<SponsorProps> = (args) => <Sponsor {...args}/>

export const GoldSponsor = Template.bind({});
GoldSponsor.args = {
  title: '🥇 Gold Sponsor',
  sponsorList: [
    { name: 'Solita', image: { url: 'https://api.react-finland.fi/media/sponsors/solita.svg' } },
    { name: 'Gofore', image: { url: 'https://api.react-finland.fi/media/sponsors/gofore.svg' } },
  ],
};

export const SilverSponsors = Template.bind({});
SilverSponsors.args = {
  title: '🥈 Silver Sponsors',
  sponsorList: [
    { name: 'Knowit', image: { url: 'https://api.react-finland.fi/media/sponsors/knowit.svg' } },
    { name: 'Elisa', image: { url: 'https://api.react-finland.fi/media/sponsors/elisa.svg' } },
  ],
};

export const BronzeSponsors = Template.bind({});
BronzeSponsors.args = {
  title: '🥉 Bronze Sponsors',
  sponsorList: [
    { name: 'Alma Media', image: { url: 'https://api.react-finland.fi/media/sponsors/alma.svg' } },
    { name: 'Geniem', image: { url: 'https://api.react-finland.fi/media/sponsors/geniem.svg' } },
  ],
};