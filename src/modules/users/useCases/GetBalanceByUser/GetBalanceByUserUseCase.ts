import { IAccountsRepository } from '../../../accounts/repositories/implementations/IAccountsRepository';
import { IGetBalanceDTO } from '../../dtos/IGetBalanceDTO'
import { Currency } from '../../../../shared/enums/currencies';
import { inject, injectable } from 'tsyringe'
import { IExchangesRepository } from 'modules/exchanges/repositories/implementations/IExchangesRepository';

@injectable()
class GetBalanceByUserUseCase {
  constructor(
    @inject("AccountsRepository")
    private accountRepository: IAccountsRepository
  ) { }

  async execute(id_user: string): Promise<IGetBalanceDTO> {

    const accounts = await this.accountRepository.list(id_user)

    const balance: IGetBalanceDTO = {
      id_user,
      balances: []
    }

    accounts.forEach(account => {
      const account_value = account.type === "credit" ? account.value : (-1) * account.value

      const balanceIndex = balance
        .balances
        .findIndex(balance => balance.currency === account.currency)

      if (balanceIndex < 0) {
        balance.balances.push({
          value: account_value,
          currency: account.currency
        })
      } else {
        balance.balances[balanceIndex].value = balance.balances[balanceIndex].value + account_value
      }
    })

    return balance
  }
}

export { GetBalanceByUserUseCase }