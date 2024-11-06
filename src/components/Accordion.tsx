import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Importação corrigida
import clsx from 'clsx';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  value: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, value }) => (
  <AccordionPrimitive.Item value={value} className="border-b border-gray-200">
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={clsx(
          'flex justify-between items-center w-full py-2 px-4 text-left text-gray-900 font-medium',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        {title}
        <ChevronDownIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content className="px-4 py-2 text-gray-700">
      {children}
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
);

export default AccordionItem;