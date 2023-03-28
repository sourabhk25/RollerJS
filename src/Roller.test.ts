import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  // test("Description", () => {
  // });

  test("Roller with 6 faces(Happy flow) constructor)", () => {
    let myRoller: Roller = new Roller(6);
    let actual: number = myRoller.getFaces();
    expect(actual).toBe(6);
  });

  test("Roller with 1 face(Sad flow) constructor)", () => {
    let myRoller: Roller = new Roller(1);
    let actual: number = myRoller.getFaces();
    expect(actual).toBe(6);
  });

  test("Roller with 2 face(Sad flow) constructor)", () => {
    let myRoller: Roller = new Roller(2);
    let actual: number = myRoller.getFaces();
    expect(actual).toBe(2);
  });

  //we keep 6 as default no. of faces for below testcases now, since we need to test roll function
  test("Roll with 2 number (Happy flow) for roll function expect 2)", () => {
    let myRoller: Roller = new Roller(6);
    let actual: number = myRoller.roll(2);
    expect(actual).toBe(2);
  });

  test("Roll with -1 number (Sad flow) for roll function expect 0)", () => {
    let myRoller: Roller = new Roller(6);
    let actual: number = myRoller.roll(-1);
    expect(actual).toBe(0);
  });

  //for less no. of faces
  test("Roll with 3 number (Sad flow) for roll function expect 0)", () => {
    let myRoller: Roller = new Roller(2);
    let actual: number = myRoller.roll(3);
    expect(actual).toBe(0);
  });

  test("Roll with 10 number (Sad flow) for roll function expect 0)", () => {
    let myRoller: Roller = new Roller(6);
    let actual: number = myRoller.roll(10);
    expect(actual).toBe(0);
  });

  test("Get last Roll with (Sad flow) for last function)", () => {
    let myRoller: Roller = new Roller(6);
    let actual: number = myRoller.last();
    expect(actual).toBe(0); //since no roll has done
  });

  test("Get last Roll with (sad flow) for last function)", () => {
    let myRoller: Roller = new Roller(6);
    let temp: number = myRoller.roll(10);
    let actual: number = myRoller.last();
    expect(actual).toBe(0); //since wrong roll has done
  });

  test("Get last Roll with (Happy flow) for last function)", () => {
    let myRoller: Roller = new Roller(6);
    let temp: number = myRoller.roll(2);
    let actual: number = myRoller.last();
    expect(actual).toBe(2); //since wrong roll has done
  });

  test("Return a Map object with keys from 1 to the number of faces and values of 0 if no rolls have been made yet", () => {
    let myRoller: Roller = new Roller(6);
    const map = myRoller.distribution();
    expect(map).toEqual(new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]));
  });

  test("Return a Map object with keys from 1 to the number of faces and values of no. of rolls after some valid rolls", () => {
    let myRoller: Roller = new Roller(6);
    let temp1: number = myRoller.roll(2);
    let temp2: number = myRoller.roll(1);
    const map = myRoller.distribution();
    expect(map).toEqual(new Map([[1, 1], [2, 1], [3, 0], [4, 0], [5, 0], [6, 0]]));
  });

  // test("should return a Map object with the correct values for each face that has been rolled", () => {
  //   die.roll(3);
  //   expect(die.distribution()).toEqual(new Map([[1, 0], [2, 0], [3, 1], [4, 0], [5, 0], [6, 0]]));
  //
  //   die.roll(6);
  //   expect(die.distribution()).toEqual(new Map([[1, 0], [2, 0], [3, 1], [4, 0], [5, 0], [6, 1]]));
  // });



});