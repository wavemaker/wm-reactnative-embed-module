import * as React from 'react';

import { EmbedCommModuleViewProps } from './EmbedCommModule.types';

export default function EmbedCommModuleView(props: EmbedCommModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
