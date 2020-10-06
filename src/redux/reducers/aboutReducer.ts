type InitialStateType = typeof initialState;

let initialState = {
  title: 'About me',
  caption: 'I’m Front-end Developer with 6 years experience',
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
  skills: [
    { id: 1, name: 'HTML', value: 90, unit: '%', color: '$turquoise' },
    { id: 2, name: 'CSS', value: 90, unit: '%', color: '$fuchsia' },
    { id: 3, name: 'Javascript', value: 80, unit: '%', color: '$yellow' },
    { id: 4, name: 'Frameworks', value: 70, unit: '%', color: '$orange' },
  ],
  buttonName: 'Download CV',
};

const aboutReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default aboutReducer;
