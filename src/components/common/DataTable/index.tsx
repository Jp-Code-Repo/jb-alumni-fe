import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData extends object> {
  data: TData[];
  columns: any[];
  isLoading?: boolean
}

export default function DataTable<TData extends object>({
  data,
  columns,
  isLoading
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border overflow-hidden">
      <table className="w-full caption-bottom text-sm">
        <thead className="border-b bg-muted/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="h-12 px-4 text-left align-middle font-medium"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b transition-colors hover:bg-muted/50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 align-middle">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            isLoading ? (
              <tr>
                <td
                  colSpan={columns?.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              <tr>
                <td
                  colSpan={columns?.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results.
                </td>
              </tr>
            ) 
          )}
        </tbody>
      </table>
    </div>
  );
}