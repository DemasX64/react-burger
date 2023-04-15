import { CATEGORIES } from '../../utils/constants';
import reducer, {
  setBunInView, setCurrentTab, setMainInView, setSauceInView,
} from './index';

describe('index reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        currentTab: CATEGORIES.BUN.NAME,
        bunInView: false,
        mainInView: false,
        sauceInView: false,
      },
    );
  });

  it('should handle SetCurrentTab', () => {
    expect(
      reducer(undefined, setCurrentTab(CATEGORIES.MAIN.NAME)),
    ).toEqual(
      {
        currentTab: CATEGORIES.MAIN.NAME,
        bunInView: false,
        mainInView: false,
        sauceInView: false,
      },
    );
  });
  it('should handle SetBunInView', () => {
    expect(
      reducer(undefined, setBunInView(true)),
    ).toEqual(
      {
        currentTab: CATEGORIES.BUN.NAME,
        bunInView: true,
        mainInView: false,
        sauceInView: false,
      },
    );
  });
  it('should handle SetMainInView', () => {
    expect(
      reducer(undefined, setMainInView(true)),
    ).toEqual(
      {
        currentTab: CATEGORIES.MAIN.NAME,
        bunInView: false,
        mainInView: true,
        sauceInView: false,
      },
    );
  });
  it('should handle setSauceInView', () => {
    expect(
      reducer(undefined, setSauceInView(true)),
    ).toEqual(
      {
        currentTab: CATEGORIES.SAUCE.NAME,
        bunInView: false,
        mainInView: false,
        sauceInView: true,
      },
    );
  });
});
