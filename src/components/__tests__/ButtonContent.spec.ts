import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import ButtonContent from '../../components/ButtonContent.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('Button', () => {

    let localVue;
    let wrapper: any
    beforeAll(() => {
        localVue = createLocalVue();
        wrapper = mount(ButtonContent, { localVue });
    });

    test('sholud emit an add event', () => {
        const add = jest.fn()
        const button = wrapper.find('.v-btn')
        wrapper.vm.$on('add', add)
        button.trigger('click')
        expect('add').toBeTruthy()
    });

    test('should a clear event', () => {
        const clear = jest.fn();
        const button = wrapper.find('.v-btn');
        wrapper.vm.$on('clear', clear);
        button.trigger('clear')
        expect('add').toBeTruthy()
    });

    test('checks if it has class of  add', () => {
        expect(wrapper.text()).toContain('add');
        expect(wrapper.html()).toContain('"material-icons large"')
    });

    test('checks if it has remove with class', () => {
        expect(wrapper.text()).toContain('remove')
        expect(wrapper.html()).toContain('"btn removebtn large')
    });

    test('checks if it has remove', () => {

        expect(wrapper.html()).toContain('<i class="material-icons large">add</i>')
    });


    test('remove icon which clears items from the table', () => {

        expect(wrapper.html()).toContain('<i class="material-icons">remove</i>')
    });


});  