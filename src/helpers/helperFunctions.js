import { availableCategories } from "./available-categories";

export const createOptions = () => {
    const categoryKeys = Object.keys(availableCategories);
    const options = categoryKeys.map(category => {
      return (
        <option key={category} value={category}>
          {availableCategories[category]}
        </option>
          )
        }
      )
      return [<option key="random">Random</option>, ...options]
    };