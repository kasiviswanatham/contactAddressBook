import { mount } from '@vue/test-utils'
import ContactCard from '../src/components/ContactCard.vue'

//import * as userTypes from '../types/user'
describe('ContactCard', () => {
  const user = {
    name: { first: 'Nicole', last: 'Sander' },
    email: 'nicole.sander@example.com',
    phone: '0113-3793090',
    location: {
      street: { number: 45, name: 'Jahnstraße' },
      city: 'Nagold',
      country: 'Germany',
      postcode: 3453234,
    },
    picture: { medium: 'https://randomuser.me/api/portraits/med/women/1.jpg' },
  }

  it('renders user data correctly', () => {
    const wrapper = mount(ContactCard, { props: { user } })
    expect(wrapper.text()).toContain('Nicole Sander')
    expect(wrapper.text()).toContain('45 Jahnstraße')
    expect(wrapper.text()).toContain('Nagold, Germany')
    expect(wrapper.text()).toContain('Call 0113-3793090')
    expect(wrapper.find('img').attributes('src')).toBe(user.picture.medium)
  })

  it('matches snapshot', () => {
    const wrapper = mount(ContactCard, { props: { user } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
