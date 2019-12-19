import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetify from 'vuetify';
import TableContent from '../../components/TableContent.vue'




const localVue = createLocalVue()


describe('TableContent.vue', () => {

    beforeEach(() => {
        const localVue = createLocalVue()
        const wrapper = shallowMount(TableContent, {
            vuetify,
            localVue,
            propsData: {
                posts: 'posts'
            }
        })
    });






    test('should render content correctly', () => {
        const wrapper = shallowMount(TableContent, {
            vuetify,
            localVue
        });
        // expect(wrapper.vm.$el).toMatchSnapshot();
    });

    test('Selects the row item on click', () => {
        const wrapper = shallowMount(TableContent, {
            localVue,
            vuetify,


        });
        const classSelector = wrapper.find({ name: 'highlight' })
        // classSelector.trigger('click')
        expect(wrapper.contains('highlight')).toBe(false)

    });

    test('checks for class', () => {
        const wrapper = shallowMount(TableContent, {
            vuetify,
            localVue,

        })
        expect(wrapper.html()).toContain('class="scroll"')
    });



})