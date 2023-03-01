

export type TDiagramContext = {
	data: TDiagramData[];
	selectedItem: TDiagramData;
	setSelectedItem: (item: TDiagramData) => void;
};


export type TDiagramData = {
	id: number;
	data: {
		dates: number[]
		circleLabel: string
		posts: TDiagramPosts[]
	};
};

type TDiagramPosts = {
	title: number
	description: string
}

export type TDiagramItemParams = {
	index:number;
	step:number;
	active: boolean;
}