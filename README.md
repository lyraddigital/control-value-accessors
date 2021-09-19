# Control Value Accessors

This repository demonstrates how to create a custom form control in Angular known as a **Control Value Accessor**. In short a Control Value Accessor is a component that has the ability to wire itself up to the Reactive Forms framework, making it easy to capture and validate form data. This repository will show you not only how to wire it to the Reactive Forms framework, but it will also show you how you handle the enabling / disabling of your control as well.

## Breakdown

This repository contains 3 branches. Each branch contains the following.

- Main: Contains the code before implementing the Control Value Accessor logic
- Step-1: Contains the new slide toggle control implemented using the ControlValueAccessor interface
- Step-2: Contains the same slide toggle control, but instead, extends the CheckboxValueAccessor interface.

## Development server

This project can be ran locally. Upon forking this repository, you just need to run the following commands

- `npm install`
- `npx ng serve`

If you have done this properly for the main branch you should see the following appear in your browser.

![image](https://user-images.githubusercontent.com/19817876/133923613-26cdb25f-e4ad-4cf1-8c4d-d6b3561e7bbe.png)

