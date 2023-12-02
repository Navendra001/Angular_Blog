import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent {
  allTitle: object = {
    auto_complete_div: 'AutoComplete',
    badge_div: 'Badge',
    bottom_sheet_div: 'Bottom Sheet',
    button_div: 'Button',
    button_toggle_div: 'Button toggle',
    card_div: 'Card',
    checkbox_div: 'Checkbox',
    chips_div: 'Chips',
    core_div: 'Core',
    datepicker_div: 'Datepicker',
    dialog_div: 'Dialog',
    divider_div: 'Divider',
    expansion_panel_div: 'Expansion Panel',
    form_field_div: 'Form field',
    grid_list_div: 'Grid list',
    icon_div: 'Icon',
    input_div: 'Input',
    list_div: 'List',
    menu_div: 'Menu',
    paginator_div: 'Paginator',
    progress_bar_div: 'Progress bar',
    progress_spinner_div: 'Progress spinner',
    radio_button_div: 'Radio button',
    ripples_div: 'Ripples',
    select_div: 'Select',
    sidenav_div: 'Sidenav',
    slide_toggle_div: 'Slide toggle',
    slider_div: 'Slider              ',
    snackbar_div: 'Snackbar',
    sort_header_div: 'Sort header',
    stepper_div: 'Stepper',
    table_div: 'Table',
    tabs_div: 'Tabs',
    toolbar_div: 'Toolbar',
    tooltip_div: 'Tooltip',
    tree_div: 'Tree',
  };

  allVisible: object = {
    auto_complete_div: true,
    badge_div: false,
    bottom_sheet_div: false,
    button_div: false,
    button_toggle_div: false,
    card_div: false,
    checkbox_div: false,
    chips_div: false,
    core_div: false,
    datepicker_div: false,
    dialog_div: false,
    divider_div: false,
    expansion_panel_div: false,
    form_field_div: false,
    grid_list_div: false,
    icon_div: false,
    input_div: false,
    list_div: false,
    menu_div: false,
    paginator_div: false,
    progress_bar_div: false,
    progress_spinner_div: false,
    radio_button_div: false,
    ripples_div: false,
    select_div: false,
    sidenav_div: false,
    slide_toggle_div: false,
    slider_div: false,
    snackbar_div: false,
    sort_header_div: false,
    stepper_div: false,
    table_div: false,
    tabs_div: false,
    toolbar_div: false,
    tooltip_div: false,
    tree_div: false,
  };

  getComponentTitle(): Array<any> {
    return Object.entries(this.allTitle).map(
      ([key, value]) => ({ key, value })
    );
  }
  getlComponentsVisible(): Array<any> {
    return Object.entries(this.allVisible).map(
      ([key, value]) => ({ key, value })
    );
  }

  onButtonClick(itemKey: any) {
    console.log("onButtonClick ?>>>", itemKey);

    Object.entries(this.allVisible).map(
      ([key, value]) => {
        if(itemKey === key){
          value = true;
        }
        else {
          value = false;
        }
      }
    );
  }
}
