export interface ICalculateWordsTypesData {
	text: string
}

export interface IWordsStatistic {
	noun: number; 
	verb: number; 
	adjective: number; 
	adverb: number; 
	preposition: number; 
	conjunction: number; 
	pronoun: number; 
	interjection: number; 
	determiner: number; 
	numeral: number; 
}

function normilize(dictionary: IWordsStatistic): string {
	const types = Object.keys(dictionary)
	
	const stringifiedStatistic = types.reduce((acc, type, currentIndex, array) => {
		const isLastElm = currentIndex === (array.length - 1)
		const count = dictionary[type as keyof IWordsStatistic]
		const delimiter = isLastElm ? ', ' : ', '
		return acc + `${type}: ${count}` + delimiter
	}, '')

	return stringifiedStatistic;
}
  
export async function calculateWordsTypes(data: ICalculateWordsTypesData): Promise<string> {
	const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/words-statistic`, { method: 'POST', body: JSON.stringify(data) })
	const body = await response.json()
	return normilize(body)
}
  