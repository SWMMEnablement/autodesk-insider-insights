import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, CreditCard, Calendar, DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PaymentRecord {
  date: string;
  orderId: string;
  product: string;
  amount: number;
  paymentMethod: string;
}

const paymentHistory: PaymentRecord[] = [
  { date: "Dec 23, 2025", orderId: "1004554213", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "MasterCard •••• 0028" },
  { date: "Nov 15, 2025", orderId: "1004179895", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "MasterCard •••• 0028" },
  { date: "Oct 15, 2025", orderId: "1003875614", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "MasterCard •••• 0028" },
  { date: "Sep 15, 2025", orderId: "1003585507", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "MasterCard •••• 0028" },
  { date: "Aug 12, 2025", orderId: "1003285878", product: "AEC Collection", amount: 3675.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jun 15, 2025", orderId: "1002771583", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "PayPal" },
  { date: "May 15, 2025", orderId: "1002501518", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "PayPal" },
  { date: "Apr 15, 2025", orderId: "1002230095", product: "Flex Tokens", amount: 2625.00, paymentMethod: "PayPal" },
  { date: "Apr 4, 2025", orderId: "1002140461", product: "Annual Subscription", amount: 10500.00, paymentMethod: "MasterCard •••• 0028" },
  { date: "Apr 3, 2025", orderId: "1002129061", product: "InfoDrainage", amount: 150.00, paymentMethod: "PayPal" },
  { date: "Mar 15, 2025", orderId: "1001959544", product: "InfoWorks ICM - Ultimate", amount: 2250.00, paymentMethod: "PayPal" },
  { date: "Dec 17, 2024", orderId: "1001222235", product: "Flex Tokens", amount: 450.00, paymentMethod: "PayPal" },
  { date: "Aug 12, 2024", orderId: "1000385327", product: "AEC Collection", amount: 3382.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jun 20, 2024", orderId: "1000172794", product: "Flex Tokens", amount: 300.00, paymentMethod: "Visa •••• 2903" },
  { date: "Nov 8, 2023", orderId: "1000025765", product: "Flex Tokens", amount: 300.00, paymentMethod: "Visa •••• 2903" },
  { date: "Aug 12, 2023", orderId: "50486858", product: "AEC Collection", amount: 3085.00, paymentMethod: "Visa •••• 2903" },
  { date: "Apr 25, 2023", orderId: "1000009397", product: "Flex Tokens", amount: 930.00, paymentMethod: "Visa •••• 2903" },
  { date: "Aug 12, 2022", orderId: "48728975", product: "AEC Collection", amount: 3270.00, paymentMethod: "Visa •••• 2903" },
  { date: "Aug 12, 2022", orderId: "48728623", product: "Flex Tokens", amount: 300.00, paymentMethod: "Visa •••• 2903" },
  { date: "Aug 1, 2022", orderId: "48680942", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jul 28, 2022", orderId: "48669486", product: "3ds Max", amount: 225.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jul 1, 2022", orderId: "48545184", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jun 12, 2022", orderId: "48461965", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jun 1, 2022", orderId: "48414242", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "May 12, 2022", orderId: "48333310", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "May 1, 2022", orderId: "48286735", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "Apr 12, 2022", orderId: "48205079", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "Mar 12, 2022", orderId: "48078691", product: "Fusion 360", amount: 60.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jan 9, 2022", orderId: "47800964", product: "Civil 3D", amount: 2205.00, paymentMethod: "PayPal" },
  { date: "Dec 9, 2021", orderId: "47679998", product: "Flex Tokens", amount: 300.00, paymentMethod: "Visa •••• 2903" },
  { date: "Dec 9, 2021", orderId: "47676305", product: "Civil 3D", amount: 305.00, paymentMethod: "PayPal" },
  { date: "Nov 9, 2021", orderId: "47539381", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "Oct 9, 2021", orderId: "47405414", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "Sep 9, 2021", orderId: "47162307", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "Aug 9, 2021", orderId: "47162307", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "Aug 4, 2021", orderId: "47143527", product: "InfraWorks", amount: 205.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jul 9, 2021", orderId: "47042498", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "Jul 4, 2021", orderId: "47024601", product: "InfraWorks", amount: 230.00, paymentMethod: "Visa •••• 2903" },
  { date: "Jun 9, 2021", orderId: "46927482", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "May 9, 2021", orderId: "46812790", product: "Civil 3D", amount: 275.00, paymentMethod: "PayPal" },
  { date: "Apr 9, 2021", orderId: "46705178", product: "Civil 3D", amount: 305.00, paymentMethod: "PayPal" },
];

const totalSpent = paymentHistory.reduce((sum, record) => sum + record.amount, 0);
const yearlyTotals = paymentHistory.reduce((acc, record) => {
  const year = record.date.split(", ")[1];
  acc[year] = (acc[year] || 0) + record.amount;
  return acc;
}, {} as Record<string, number>);

export const SubscriptionReceipts = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRecords = showAll ? paymentHistory : paymentHistory.slice(0, 10);

  return (
    <section id="receipts" className="py-16 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-emerald-500/30 text-emerald-600">
            <Receipt className="w-4 h-4 mr-2" />
            Documented Proof
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Subscription Receipts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real payment records from my personal Autodesk account. 
            This isn't a claim—it's documented history.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-card/60 backdrop-blur-sm border-primary/10 text-center">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
            <div className="text-2xl font-bold text-foreground">${totalSpent.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Total Invested</div>
          </Card>
          <Card className="p-4 bg-card/60 backdrop-blur-sm border-primary/10 text-center">
            <Receipt className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-foreground">{paymentHistory.length}</div>
            <div className="text-xs text-muted-foreground">Total Transactions</div>
          </Card>
          <Card className="p-4 bg-card/60 backdrop-blur-sm border-primary/10 text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold text-foreground">Apr 2021</div>
            <div className="text-xs text-muted-foreground">First Payment</div>
          </Card>
          <Card className="p-4 bg-card/60 backdrop-blur-sm border-primary/10 text-center">
            <CreditCard className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold text-foreground">5+ Years</div>
            <div className="text-xs text-muted-foreground">Continuous Subscriber</div>
          </Card>
        </div>

        {/* Yearly Breakdown */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(yearlyTotals)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, total]) => (
              <Badge 
                key={year} 
                variant="outline" 
                className="px-4 py-2 text-sm bg-card/60 border-primary/20"
              >
                <span className="font-bold text-foreground">{year}:</span>
                <span className="ml-2 text-emerald-600">${total.toLocaleString()}</span>
              </Badge>
            ))}
        </div>

        {/* Receipts Table */}
        <Card className="bg-card/60 backdrop-blur-sm border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-primary/10 hover:bg-transparent">
                  <TableHead className="text-foreground font-semibold">Date</TableHead>
                  <TableHead className="text-foreground font-semibold">Order #</TableHead>
                  <TableHead className="text-foreground font-semibold">Product</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Amount</TableHead>
                  <TableHead className="text-foreground font-semibold hidden md:table-cell">Payment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedRecords.map((record, index) => (
                  <TableRow 
                    key={`${record.orderId}-${index}`} 
                    className="border-primary/5 hover:bg-primary/5"
                  >
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      {record.date}
                    </TableCell>
                    <TableCell className="text-sm font-mono text-muted-foreground">
                      {record.orderId}
                    </TableCell>
                    <TableCell className="text-sm font-medium text-foreground">
                      {record.product}
                    </TableCell>
                    <TableCell className="text-sm font-semibold text-emerald-600 text-right">
                      ${record.amount.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden md:table-cell">
                      {record.paymentMethod}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {paymentHistory.length > 10 && (
            <div className="p-4 border-t border-primary/10 text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAll(!showAll)}
                className="gap-2"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show All {paymentHistory.length} Transactions
                  </>
                )}
              </Button>
            </div>
          )}
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            All payment records are from my personal Autodesk account—separate from any employee benefits I received before leaving Autodesk on May 22, 2026. The subscription continues.
          </p>
        </div>
      </div>
    </section>
  );
};