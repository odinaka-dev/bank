'use server';
/**
 * @fileOverview AI-powered financial tips based on the user's transaction history.
 *
 * - generateFinancialTips - A function that generates financial tips based on transaction history.
 * - FinancialTipsInput - The input type for the generateFinancialTips function.
 * - FinancialTipsOutput - The return type for the generateFinancialTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialTipsInputSchema = z.object({
  transactionHistory: z
    .string()
    .describe("The user's transaction history, as a JSON string."),
  accountBalance: z.number().describe("The user's current account balance."),
});
export type FinancialTipsInput = z.infer<typeof FinancialTipsInputSchema>;

const FinancialTipsOutputSchema = z.object({
  financialTips: z
    .string()
    .describe('Personalized financial tips based on the transaction history.'),
});
export type FinancialTipsOutput = z.infer<typeof FinancialTipsOutputSchema>;

export async function generateFinancialTips(
  input: FinancialTipsInput
): Promise<FinancialTipsOutput> {
  return financialTipsFlow(input);
}

const financialTipsPrompt = ai.definePrompt({
  name: 'financialTipsPrompt',
  input: {schema: FinancialTipsInputSchema},
  output: {schema: FinancialTipsOutputSchema},
  prompt: `You are a financial advisor providing personalized financial tips to users based on their transaction history and account balance.

  Analyze the user's transaction history and current account balance to generate relevant and helpful financial tips.

  Transaction History: {{{transactionHistory}}}
  Account Balance: {{{accountBalance}}}

  Provide financial tips that can help the user improve their financial literacy and make better decisions.`,
});

const financialTipsFlow = ai.defineFlow(
  {
    name: 'financialTipsFlow',
    inputSchema: FinancialTipsInputSchema,
    outputSchema: FinancialTipsOutputSchema,
  },
  async input => {
    const {output} = await financialTipsPrompt(input);
    return output!;
  }
);
