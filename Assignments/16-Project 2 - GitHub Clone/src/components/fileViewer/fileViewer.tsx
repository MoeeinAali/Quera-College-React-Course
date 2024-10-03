import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import IFileViewerProps from '../../core/interfaces/props/IfileViewer.prop';


const FileViewer: React.FC<IFileViewerProps> = ({ fileContent, language }) => {
    return (
        <SyntaxHighlighter  language={language} style={prism}>
            {fileContent}
        </SyntaxHighlighter>
    );
};

export default FileViewer;
