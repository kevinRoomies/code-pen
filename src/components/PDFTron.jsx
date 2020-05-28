import React, {Component, createRef} from "react";
import WebViewer from '@pdftron/webviewer';
import Box from "./Box";

class PDFTron extends Component {
	constructor(props) {
		super(props);
		this.webViewer = createRef();
	}

	componentDidMount() {
		WebViewer({
			path: "/webviewer/lib",
			initialDoc: "/files/pdftron_about.pdf",
			enableMeasurement: true
		}, this.webViewer.current)
			.then((instance) => {
				const {docViewer, Annotations} = instance;
				const annotManager = docViewer.getAnnotationManager();

				document.getElementById("file-picker").onchange = e => {
					const file = e.target.files[0];
					if (file) {
						instance.loadDocument(file);
					}
				};
				docViewer.on("documentLoaded", () => {
					const rectangleAnnot = new Annotations.RectangleAnnotation();
					rectangleAnnot.PageNumber = 1;
					// values are in page coordinates with (0, 0) in the top left
					rectangleAnnot.X = 100;
					rectangleAnnot.Y = 150;
					rectangleAnnot.Width = 200;
					rectangleAnnot.Height = 50;
					rectangleAnnot.Author = annotManager.getCurrentUser();

					annotManager.addAnnotation(rectangleAnnot);
					// need to draw the annotation otherwise it won't show up until the page is refreshed
					annotManager.redrawAnnotation(rectangleAnnot);
				});
			});
	};

	render()
	{
		return (
			<Box direction={"column"} flex={19}>
				<input type="file" id="file-picker" accept="image/*, .pdf" />
				<div className="webviewer" style={{height: "100%", width: "100%"}} ref={this.webViewer}/>
			</Box>
		);
	}
}

export default PDFTron;