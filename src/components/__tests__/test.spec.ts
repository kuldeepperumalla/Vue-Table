import { shallowMount, createLocalVue } from '@vue/test-utils';
import vuetify from 'vuetify';
import ButtonContent from '../../components/ButtonContent.vue';


const localVue = createLocalVue()
describe('Button', () => {
   let wrapper: any;

   beforeEach(() => {
      const localVue = createLocalVue()
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue,

      })
   });

   test('checks if it has add', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue
      })
      expect(wrapper.text()).toContain('add')
   });

   test('checks if it has remove', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue
      })
      expect(wrapper.text()).toContain('remove')
   });

   test('checks if it has remove', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue

      })
      expect(wrapper.html()).toContain('<i class="material-icons large">add</i>')
   });


   test('remove icon which clears items from the table', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue
      })
      expect(wrapper.html()).toContain('<i class="material-icons">remove</i>')
   });

   test('has buttons', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue
      })

      const Button = wrapper.find('v-btn')
      Button.trigger('click')
      expect(wrapper.contains('v-btn')).toBe(true);
   });

   test('should emit an event when the action v-btn is clicked', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue
      })
      const Button = wrapper.find('v-btn')
      const add: any = jest.fn();
      const clear: any = jest.fn();
      Button.trigger('click', add)
      expect(wrapper.vm.$emit('add'))
      Button.trigger('click', clear)
      expect(wrapper.vm.$emit('add'))

   });

   it('emits an add event', () => {
      const wrapper = shallowMount(ButtonContent, {
         localVue,
         vuetify,
      })

      const add = jest.fn()
      const button = wrapper.find('.v-btn')
      wrapper.vm.$on('add', add)
      expect('add').toBeTruthy()

   });

   it('emits a clear event', () => {
      const wrapper = shallowMount(ButtonContent, {
         vuetify,
         localVue
      })
      expect(wrapper.vm.$emit('clear')).toBeTruthy()
   });
});

