export interface ILeagueParams {
  id: number;
  name: string;
  type: string;
  logo: string;
  onPress?: () => void;
  selected?: boolean;
}
