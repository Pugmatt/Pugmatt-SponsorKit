import { BadgePreset, defineConfig, tierPresets } from 'sponsorkit'

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  onSponsorsFetched: function(sponsors, provider) {
    console.log(sponsors, provider);
    for (let i = 0; i < 100; i++) {
       sponsors.push({
       sponsor: {
          type: 'User',
          login: "testlogin" + i,
          name: "Test Name" + i,
          avatarUrl: "https://picsum.photos/200"
       },
         monthlyDollars: Math.floor(Math.random()*55)
      });
    }
  return sponsors;
  },
  render: 'circles',
  tiers: [
    {
      title: 'Sponsors',
      preset: tierPresets.xs,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.small,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 15,
      preset: tierPresets.medium,
    },
    {
      title: 'Diamond Sponsor',
      monthlyDollars: 50,
      preset: tierPresets.large,
    }
  ],
  renders: [
    {
      name: 'sponsors',
      renderer: 'tiers',
      width: 800,
      formats: ['svg', 'png'],
    },
    {
      name: 'sponsors-wide',
      width: 1000,
      renderer: 'tiers',
      formats: ['svg'],
    },
    {
      renderer: 'circles',
      name: 'sponsors-circles',
      width: 1000,
      includePastSponsors: true,
    },
  ],
})
