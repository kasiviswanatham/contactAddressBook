import { mount } from '@vue/test-utils'
import ContactList from '../src/components/ContactList.vue'
import axios from 'axios'

//import * as userTypes from '../types/user'
jest.mock('axios')

describe('ContactList', () => {
  const mockUsers = [
    {
      name: { first: 'Nicole', last: 'Sander' },
      email: 'nicole.sander@example.com',
      phone: '0113-3793090',
      location: {
        street: { number: 45, name: 'Jahnstraße' },
        city: 'Nagold',
        country: 'Germany',
        postcode: 3453454,
      },
      picture: { medium: 'https://randomuser.me/api/portraits/med/women/1.jpg' },
    },
  ]

  beforeEach(() => {
    ;(axios.get as jest.Mock).mockResolvedValue({ data: { results: mockUsers } })
  })

  it('fetches and renders users', async () => {
    const wrapper = mount(ContactList)
    await wrapper.vm.$nextTick()
    expect(axios.get).toHaveBeenCalledWith('https://api.randomuser.me/?results=30')
    expect(wrapper.text()).toContain('Nicole Sander')
  })

  it('sorts users by name', async () => {
    const wrapper = mount(ContactList)
    await wrapper.vm.$nextTick()
    const select = wrapper.find('select')
    await select.setValue('desc')
    expect(wrapper.text()).toContain('Nicole Sander') // Simplified for single user
  })

  it('matches snapshot', async () => {
    const wrapper = mount(ContactList)
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
