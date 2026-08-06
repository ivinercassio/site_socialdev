import React, { type ReactNode } from 'react';

export interface ListSection {
  title: string;
  items: ReactNode[];
}

interface ShowListProps {
  sections: ListSection[];
}

export function ShowList({ sections }: ShowListProps) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-4">
          
          <h2 className="text-xl font-semibold text-zinc-200 tracking-wide -my-2">
            {section.title}
          </h2>

          <div className="flex flex-col gap-4">
            {section.items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                {item}
              </React.Fragment>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}