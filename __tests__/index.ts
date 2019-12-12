import { popd, pushd } from "../index";

test("Validating directory change", () => {
	const startingLocation: string = process.cwd();
	const cwd = pushd("__tests__");
	expect(startingLocation).toBe(cwd);
	expect(popd()).toBe(startingLocation);
});
