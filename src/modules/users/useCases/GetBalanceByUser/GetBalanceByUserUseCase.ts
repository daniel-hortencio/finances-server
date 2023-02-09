import { ITransactionsRepository } from '../../../transactions/repositories/implementations/ITransactionsRepository';
import { IGetBalanceDTO } from '../../dtos/IGetBalanceDTO'
import { Currency } from '../../../../shared/enums/currencies';
import { inject, injectable } from 'tsyringe'
import { IExchangesRepository } from 'modules/exchanges/repositories/implementations/IExchangesRepository';

@injectable()
class GetBalanceByUserUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionRepository: ITransactionsRepository
  ) { }

  async execute(id_user: string): Promise<IGetBalanceDTO> {

    const transactions = await this.transactionRepository.list(id_user)

    const balance: IGetBalanceDTO = {
      id_user,
      balances: []
    }

    transactions.forEach(transaction => {
      const transaction_value = transaction.type === "credit" ? transaction.value : (-1) * transaction.value

      const balanceIndex = balance
        .balances
        .findIndex(balance => balance.currency === transaction.currency)

      if (balanceIndex < 0) {
        balance.balances.push({
          value: transaction_value,
          currency: transaction.currency
        })
      } else {
        balance.balances[balanceIndex].value = balance.balances[balanceIndex].value + transaction_value
      }
    })

    return balance
  }
}

export { GetBalanceByUserUseCase }