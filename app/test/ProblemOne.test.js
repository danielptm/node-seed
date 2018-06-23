import ProblemOne from '../src/ProblemOne';
import ModuleOne from '../src/modules/ModuleOne'

describe('ProblemOne',() => {
  describe('Problem 1', () => {
    it('Get going', () => {
		const x = new ProblemOne();
		x.sayHi();
    });
	it('Module get going', () => {
		ModuleOne.sayHi();
		ModuleOne.sayBye();		
	})
  });
});
	