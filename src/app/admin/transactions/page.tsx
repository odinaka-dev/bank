import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Download } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  description: string;
  type: "Credit" | "Debit";
  amount: number;
  status: "Completed" | "Pending" | "Failed";
}

const transactions: Transaction[] = [
  { id: "txn_1", date: "2024-07-15", description: "Salary Deposit - July", type: "Credit", amount: 5000.00, status: "Completed" },
  { id: "txn_2", date: "2024-07-14", description: "Online Shopping - Amazon", type: "Debit", amount: 129.99, status: "Completed" },
  { id: "txn_3", date: "2024-07-13", description: "ATM Withdrawal - Main St", type: "Debit", amount: 200.00, status: "Completed" },
  { id: "txn_4", date: "2024-07-12", description: "Funds Transfer to John Doe", type: "Debit", amount: 500.00, status: "Completed" },
  { id: "txn_5", date: "2024-07-11", description: "Utility Bill - Electricity", type: "Debit", amount: 75.50, status: "Pending" },
  { id: "txn_6", date: "2024-07-10", description: "Refund from Services Co.", type: "Credit", amount: 49.99, status: "Completed" },
  { id: "txn_7", date: "2024-07-09", description: "Restaurant - The Great Eatery", type: "Debit", amount: 62.30, status: "Completed" },
  { id: "txn_8", date: "2024-07-08", description: "Mobile Top-up", type: "Debit", amount: 20.00, status: "Failed" },
];

export default function TransactionsPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-2xl">Transaction History</CardTitle>
            <CardDescription>View all your past and pending transactions.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 items-center">
          <Input placeholder="Search transactions..." className="max-w-xs bg-background" />
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="credit">Credit</SelectItem>
              <SelectItem value="debit">Debit</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all_status">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_status">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-muted/50">
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell className="font-medium">{transaction.description}</TableCell>
                <TableCell>
                  <Badge variant={transaction.type === "Credit" ? "default" : "secondary"}
                   className={transaction.type === "Credit" ? "bg-green-500/20 text-green-700 border-green-500/30 hover:bg-green-500/30" : "bg-red-500/20 text-red-700 border-red-500/30 hover:bg-red-500/30"}>
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell className={`text-right font-semibold ${transaction.type === "Credit" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "Credit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant={
                    transaction.status === "Completed" ? "default" :
                    transaction.status === "Pending" ? "outline" : "destructive"
                  }
                  className={
                    transaction.status === "Completed" ? "bg-emerald-500 text-white" :
                    transaction.status === "Pending" ? "bg-amber-500 text-white" : "bg-rose-500 text-white"
                  }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
