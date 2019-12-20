import { createLocalVue, mount } from '@vue/test-utils';
import TableData from '../../components/TableData.vue';
import TableContent from '../../components/TableData.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('Table', () => {

    let localVue;
    let wrapper: any

    beforeAll(() => {
        localVue = createLocalVue();
        wrapper = mount(TableData, {
            localVue,
        });
    });


    test('should mount element', () => {
        expect(wrapper.find(TableData).exists()).toBe(true);

    });


    test("check input field", () => {
        const value = wrapper.find('[class="tabledata]').element
        expect(value).toBe(undefined);

        // value.trigger('input')


    });




    it('should check if items are added', async () => {

    })


    it('should check if items are deleted', () => {

    })

});  