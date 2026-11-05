import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('presents the portfolio and internship availability', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Je donne')
    expect(wrapper.text()).toContain('idées utiles.')
    expect(wrapper.text()).toContain('Stage · mars 2027')
    expect(wrapper.text()).toContain('FAV-Dev')
    expect(wrapper.text()).toContain('ExpoIA')
    expect(wrapper.text()).toContain('Antidots')
  })

  it('links to the CV and contact details', () => {
    const wrapper = mount(App)
    expect(wrapper.find('a[href="/CV_Yaser_Alnezami_optimise.pdf"]').exists()).toBe(true)
    expect(wrapper.find('a[href="mailto:yaseralnezami@gmail.com"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://github.com/YALNEZAMI"]').exists()).toBe(true)
  })
})
